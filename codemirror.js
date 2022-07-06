/* eslint-env browser */

// @ts-ignore
import CodeMirror from 'codemirror'
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import { CodemirrorBinding } from 'y-codemirror'
import 'codemirror/mode/javascript/javascript.js'
import { EasyProvider } from './easy_provider'

window.addEventListener('load', () => {
  const ydoc = new Y.Doc()
  const provider = new EasyProvider(ydoc)
  const ytext = ydoc.getText('codemirror')
  const editorContainer = document.createElement('div')
  editorContainer.setAttribute('id', 'editor')
  document.body.insertBefore(editorContainer, null)

  const editor = CodeMirror(editorContainer, {
    mode: 'javascript',
    lineNumbers: true
  })

  const binding = new CodemirrorBinding(ytext, editor, provider.awareness)

  // @ts-ignore
  window.example = { provider, ydoc, ytext, binding, Y }
})
