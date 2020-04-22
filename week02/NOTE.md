#### unicode
	https://www.fileformat.info/info/unicode/
	https://home.unicode.org
	主要是与 ASCII 码兼容的Basic Latin
	字符
		LF
		SPACE
	CJK (中日韩) U+4E00 ~ U+9FFF
    Unicode 中文字符，可用 String.fromCharCode(num) '\t'.codePointAt() 进行打印
    不要用中文做变量名, 一定要用，写成 unicode 的形式
    "中".codePointAt(0).toString(16)
	BMP 基本字符
	平时写代码时，最好使用 ASCII 中的字符
	\u 转义
 	
	extensions
	    0 ~ U+007F：常用拉丁字符
	    String.fromCharCode(num)
	    U+4E00 ~ U+9FFF：CJK 
	    有一些增补区域（extension）
	    U+0000 - U+FFFF：BMP
  
  
#### InputElement
	 WhiteSpace
		<TAB> 制表符（打字机时代：制表时隔开数字很方便）
		<VT> 纵向制表符
		<FF> Form Feed
		<SP> 推荐开发时使用
		<NBSP> 换行时不会断开,无分词效果空格（课上 Java&nbsp;Script 的例子）
		<ZWNBSP> 零宽nbsp
		<USP>
	 LineTerminator
		<LF> Line Feed \n 推荐开发时使用
		<CR> Carriage Return 回车 \r （起源于古代打印机的退纸和换行）
		<LS>
		<PS>
	 Comment
		//
		/* */
	 Token
		Punctuator 符号 比如 > = < }
		IdentifierName
			Identifier 标识符
				变量名: 不可与关键字重合, 特例: get, undefined 全局不可改变量名
				属性名：可与关键字重合
		Keywords: 关键字 var, 不能作为关键字，特例get 
			Future reserved Keywords : 保留字
		Literal 直接量
			Number
				IEEE 754 Double Float (浮点数精度机制)
				    浮点数比较: Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON
            97 .toString(2)
				 安全整数: Number.MAX_SAFE_INTEGER
				grammar
					DecimalLiteral
						0
						0.
						.2
						1e3
					BinaryIntegerLiteral
						0b111
					OctallIntegerLiteral
						Oo10
					HexIntegerLiteral
						OxFF
			String
				Character 字符
				Code point 码点
        引号内的特殊字符 \'"bfnrtv                                                     
				Encoding
					UTF
						UTF-8 (使用 8 位存储)
						UTF-16 (使用 8 位存储，实际内存中是这种方式的)
          GB: 国标
          USC: U+0000 ~ U+FFFF, unicode 的 BMP 范围                                                             
			Boolean
				true
				false
			Null
			Undefined
                    Symbol
