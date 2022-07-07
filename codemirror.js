/* eslint-env browser */

// @ts-ignore
import CodeMirror from 'codemirror'
import * as Y from 'yjs'
import { CodemirrorBinding } from 'y-codemirror'
import 'codemirror/mode/javascript/javascript.js'
import { EasyProvider } from './easy_provider'
import { FakePipe } from './fakepipe'

window.addEventListener('load', () => {
  const pipe = new FakePipe()

  const ydoc1 = new Y.Doc()
  const pipe1 = pipe.get("first")
  const provider1 = new EasyProvider("first", ydoc1, pipe1.send)
  pipe1.on(provider1.handleRemote)

  const ydoc2 = new Y.Doc()
  const pipe2 = pipe.get("second")

  const provider2 = new EasyProvider("second", ydoc2, pipe2.send)
  pipe2.on(provider2.handleRemote)

  const first = document.querySelector(".first");
  const second = document.querySelector(".second");

  const bind1 = addEditor(ydoc1, provider1, first)
  const bind2 = addEditor(ydoc2, provider2, second)

  provider1.start()
 // provider2.start()

  window.tsar = { bind1, bind2, provider1, provider2 }
})


function addEditor(doc, provider, target) {
  const editor = CodeMirror(target, {
    mode: 'javascript',
    lineNumbers: true
  })

  return new CodemirrorBinding(doc.getText('codemirror'), editor, provider.awareness)
}
