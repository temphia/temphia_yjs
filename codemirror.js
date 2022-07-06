/* eslint-env browser */

// @ts-ignore
import CodeMirror from 'codemirror'
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import { CodemirrorBinding } from 'y-codemirror'
import 'codemirror/mode/javascript/javascript.js'
import { EasyProvider } from './easy_provider'

window.addEventListener('load', () => {

  const ydoc1 = new Y.Doc()
  const provider1 = new EasyProvider("first", ydoc1)

  const ydoc2 = new Y.Doc()
  const provider2 = new EasyProvider("second", ydoc2)

  const first = document.querySelector(".first");
  const second = document.querySelector(".second");

  const bind1 = addEditor(ydoc1, provider1, first)
  const bind2 = addEditor(ydoc2, provider2, second)

  window.tsar = { bind1, bind2, provider1, provider2 }
})


function addEditor(doc, provider, target) {
  const editor = CodeMirror(target, {
    mode: 'javascript',
    lineNumbers: true
  })

  return new CodemirrorBinding(doc.getText('codemirror'), editor, provider.awareness)
}
