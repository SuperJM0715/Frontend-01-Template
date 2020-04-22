### 课后作业：
#### 1. 写一个正则表达式 匹配所有 Number 直接量 (输入是 Number 类型，用正则匹配出来)
```
NumericLiteral ::
        十进制 	DecimalLiteral
        二进制 	BinaryIntegerLiteral
        八进制    	OctalIntegerLiteral
        十六进制   HexIntegerLiteral  
        DecimalLiteral ::
            DecimalIntegerLiteral . DecimalDigits ExponentPart (指数)
            . DecimalDigits ExponentPart
            DecimalIntegerLiteral ExponentPart
            
        DecimalIntegerLiteral ::
            0
            NonZeroDigit DecimalDigits
            
        DecimalDigits ::
            DecimalDigit
            DecimalDigits DecimalDigit
            
        DecimalDigit :: one of
            0 1 2 3 4 5 6 7 8 9
            
        NonZeroDigit :: one of
            1 2 3 4 5 6 7 8 9
            
        ExponentPart ::
            ExponentIndicator SignedInteger
            
        ExponentIndicator :: one of
            e E
            
        SignedInteger :: ( + | - | null )
            DecimalDigits
            + DecimalDigits
            - DecimalDigits
            
        BinaryIntegerLiteral :: ( 0b|0B|null + 0|1 )
            0b BinaryDigits
            0B BinaryDigits
            
        BinaryDigits ::
            BinaryDigit
            BinaryDigits BinaryDigit
            
        BinaryDigit :: one of
            0 1
            
        OctalIntegerLiteral :: ( 0o|0O|null + 0-9 )
            0o OctalDigits
            0O OctalDigits
            
        OctalDigits ::
            OctalDigit
            OctalDigits OctalDigit
            
        OctalDigit :: one of
            0 1 2 3 4 5 6 7
            
        HexIntegerLiteral :: ( 0x|0X|null + 0-9a-fA-F )
            0x HexDigits
            0X HexDigits
            
        HexDigits ::
            HexDigit
            HexDigits HexDigit
            
        HexDigit :: one of
            0 1 2 3 4 5 6 7 8 9 a b c d e f A B C D E F
```
##### 代码
```
```
#### 2. 写一个 UTF-8 Encoding 的函数 (输入汉字输出字符串编码，输入“测试”，输出“\u6d4b\u8bd5”)

```
    const UTF8Encoding = (str) => encodeURIComponent(str).split("%").join("/x");
    UTF8Encoding("中国");    //  "/xE4/xB8/xAD/xE5/x9B/xBD"
```

#### 3. 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号 (输入"a"或者'a'， 用正则匹配)
```
   StringLiteral ::
        " DoubleStringCharacters "
        ' SingleStringCharacters '
    DoubleStringCharacters ::
        DoubleStringCharacter DoubleStringCharacters
    SingleStringCharacters ::
        SingleStringCharacter SingleStringCharacters
    DoubleStringCharacter ::
        SourceCharacter but not one of " or \ or LineTerminator
        <LS>
        <PS>
        \ EscapeSequence
        LineContinuation
    SingleStringCharacter ::
        SourceCharacter but not one of ' or \ or LineTerminator
        <LS>
        <PS>
        \ EscapeSequence
        LineContinuation
    LineContinuation ::
        \ LineTerminatorSequence
    EscapeSequence ::
        CharacterEscapeSequence
        0 [lookahead ∉ DecimalDigit]
        HexEscapeSequence
        UnicodeEscapeSequence
        
    A conforming implementation, when processing strict mode code, must not extend the syntax of EscapeSequence to
    include LegacyOctalEscapeSequence as described in B.1.2.
    
    CharacterEscapeSequence ::
        SingleEscapeCharacter
        NonEscapeCharacter
    SingleEscapeCharacter :: one of
        ' " \ b f n r t v
    NonEscapeCharacter ::
        SourceCharacter but not one of EscapeCharacter or LineTerminator
    EscapeCharacter ::
        SingleEscapeCharacter
        DecimalDigit
        x
        u
    HexEscapeSequence ::
        x HexDigit HexDigit
    UnicodeEscapeSequence ::
        u Hex4Digits
        u{ CodePoint }
    Hex4Digits ::
        HexDigit HexDigit HexDigit HexDigit
```
##### 代码
