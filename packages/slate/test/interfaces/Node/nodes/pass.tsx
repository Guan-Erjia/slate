/** @jsx jsx  */
import { Node } from 'slate'
import { jsx } from 'slate-hyperscript'

export const input = (
  <editor>
    <element>
      <element pass>
        <text key="a" />
      </element>
    </element>
  </editor>
)
export const test = value => {
  return Array.from(Node.nodes(value, { pass: ([n]) => !!n.pass }))
}
export const output = [
  [input, []],
  [
    <element>
      <element pass>
        <text key="a" />
      </element>
    </element>,
    [0],
  ],
  [
    <element pass>
      <text key="a" />
    </element>,
    [0, 0],
  ],
]
