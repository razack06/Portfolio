/**
 * Turns a diagram definition from profile.js into positioned boxes and edge paths.
 * orientation 'h' = stages as columns (desktop), 'v' = stages as rows (mobile).
 */

const H = { nodeW: 156, nodeH: 56, colGap: 56, rowGap: 14, pad: 12, labelH: 22, margin: 14 }
const V = { width: 340, nodeH: 54, maxNodeW: 200, gapX: 10, rowGap: 34, pad: 10, labelH: 22, margin: 12 }

const normEdge = (e) => (Array.isArray(e) ? { from: e[0], to: e[1] } : e)

export function layoutDiagram(diagram, orientation = 'h') {
  const { stages } = diagram
  const boxes = {} // id → { x, y, w, h }
  const nodes = []
  const groups = []
  let width, height

  if (orientation === 'h') {
    const inner = (n) => n * H.nodeH + (n - 1) * H.rowGap
    const stageH = (s) => inner(s.nodes.length) + (s.group ? H.pad * 2 + H.labelH : 0)
    height = Math.max(...stages.map(stageH)) + H.margin * 2
    width = H.margin * 2 + H.pad * 2 + stages.length * H.nodeW + (stages.length - 1) * H.colGap

    stages.forEach((s, i) => {
      const x = H.margin + H.pad + i * (H.nodeW + H.colGap)
      const boxH = stageH(s)
      const boxY = (height - boxH) / 2
      const y0 = s.group ? boxY + H.pad + H.labelH : boxY
      if (s.group) {
        const g = { id: s.id, label: s.group, x: x - H.pad, y: boxY, w: H.nodeW + H.pad * 2, h: boxH }
        groups.push(g)
        boxes[s.id] = g
      }
      s.nodes.forEach((n, j) => {
        const box = { ...n, x, y: y0 + j * (H.nodeH + H.rowGap), w: H.nodeW, h: H.nodeH, dense: false }
        nodes.push(box)
        boxes[n.id] = box
      })
    })
  } else {
    let y = V.margin
    width = V.width
    stages.forEach((s) => {
      const n = s.nodes.length
      const side = s.group ? V.pad : 0
      const nodeW = Math.min(V.maxNodeW, (V.width - V.margin * 2 - side * 2 - (n - 1) * V.gapX) / n)
      const rowW = n * nodeW + (n - 1) * V.gapX
      const x0 = (V.width - rowW) / 2
      let ny = y
      if (s.group) {
        const g = { id: s.id, label: s.group, x: x0 - V.pad, y, w: rowW + V.pad * 2, h: V.labelH + V.pad * 2 + V.nodeH }
        groups.push(g)
        boxes[s.id] = g
        ny = y + V.labelH + V.pad
        y += g.h + V.rowGap
      } else {
        y += V.nodeH + V.rowGap
      }
      s.nodes.forEach((node, j) => {
        const box = { ...node, x: x0 + j * (nodeW + V.gapX), y: ny, w: nodeW, h: V.nodeH, dense: n >= 3 }
        nodes.push(box)
        boxes[node.id] = box
      })
    })
    height = y - V.rowGap + V.margin
  }

  // Edges: exit right/bottom of source, enter left/top of target, as smooth curves.
  const edges = diagram.edges.map(normEdge).map((e) => {
    const a = boxes[e.from]
    const b = boxes[e.to]
    if (!a || !b) throw new Error(`Diagram edge references unknown id: ${e.from} → ${e.to}`)
    let d
    if (orientation === 'h') {
      const x1 = a.x + a.w, y1 = a.y + a.h / 2
      const x2 = b.x - 3, y2 = b.y + b.h / 2
      const dx = (x2 - x1) / 2
      d = `M${x1 + (e.bi ? 3 : 0)},${y1} C${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}`
    } else {
      const x1 = a.x + a.w / 2, y1 = a.y + a.h
      const x2 = b.x + b.w / 2, y2 = b.y - 3
      const dy = (y2 - y1) / 2
      d = `M${x1},${y1 + (e.bi ? 3 : 0)} C${x1},${y1 + dy} ${x2},${y2 - dy} ${x2},${y2}`
    }
    return { ...e, d }
  })

  return { width, height, nodes, groups, edges }
}

/** Plain-text description of the data flow, for screen readers. */
export function describeDiagram(diagram) {
  const label = {}
  diagram.stages.forEach((s) => {
    if (s.group) label[s.id] = s.group
    s.nodes.forEach((n) => (label[n.id] = n.label))
  })
  return diagram.edges
    .map(normEdge)
    .map((e) => `${label[e.from]} ${e.bi ? '↔' : '→'} ${label[e.to]}`)
    .join('; ')
}

/** Short one-line flow, e.g. "Teltonika → Java parser → PostgreSQL → …" (used on cards). */
export function flowSummary(diagram) {
  return diagram.stages.map((s) => (s.group ? s.group.split(' ·')[0] : s.nodes[0].label))
}
