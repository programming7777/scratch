class Test {
	constructor() {}
	getInfo() { // 拡張機能の各種情報
		return {
			id: 'test',
			name: 'Test', // 拡張機能の名前
			blocks: [ // 各ブロックの定義
				{
					opcode: 'hello',
					blockType: Scratch.BlockType.COMMAND,
          text: 'hello'
				}
			]
		}
	}
	hello() {
		console.log('hello'); // console log に hello と出力
	}
}
Scratch.extensions.register(new Test());
