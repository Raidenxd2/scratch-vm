const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');

class Scratch3DebugBlocks {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getInfo () {
        return {
            id: 'debugblocks',
            name: 'Debug Blocks',
            blocks: [
                {
                    opcode: 'writeLog',
                    blockType: BlockType.COMMAND,
                    text: 'log [TEXT]',
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: "hello",
                            menu: "languages"
                        }
                    }
                },
                {
                    opcode: 'writeError',
                    blockType: BlockType.COMMAND,
                    text: 'logError [TEXT]',
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: "Error",
                            menu: "errors"
                        }
                    }
                }

            ],
            menus: {
                languages: {
                    acceptReporters: true,
                    items: [{ text: "test", value: "test"}, {text: "hello", value: "hello"}]
                },
                errors: {
                    acceptReporters: true,
                    items: [{ text: "Error", value: "Error"}, {text: "An Error Has Occured.", value: "An Error Has Occured."}]
                }
            }
        };
    }

    writeLog (args) {
        const text = Cast.toString(args.TEXT);
        log.log(text);
    }
    writeError (args) {
        const text = Cast.toString(args.TEXT);
        log.error(text);
    }
}

module.exports = Scratch3DebugBlocks;
