import * as encoding from "lib0/encoding.js";
import * as decoding from "lib0/decoding.js";
import { Observable } from "lib0/observable.js";
import * as logging from "lib0/logging.js";
import * as promise from "lib0/promise.js";
import * as Y from "yjs"; // eslint-disable-line
import * as syncProtocol from "y-protocols/sync.js";
import * as awarenessProtocol from "y-protocols/awareness.js";

const log = logging.createModuleLogger("y-dat");

const messageSync = 0;
const messageQueryAwareness = 3;
const messageAwareness = 1;
// const messageBcPeerId = 4

export class EasyProvider extends Observable {
  // doc: Y.Doc;
  // awareness: awarenessProtocol.Awareness;

  constructor(name, doc) {
    super();
    this.doc = doc;
    this.name = name

    doc.on('update', this.handlerUpdate)
    this.awareness = new awarenessProtocol.Awareness(doc);

  }

  handlerUpdate = (update, origin) => {
    console.log("DOCUMENT_UPDATED ", this.name, {update, origin});
    
  };
}
