// caesarCipher Tests
const caesarCipher = require("./caesarCipher");
test("caeserCipher('a',1) should return 'b'",()=>{
    expect(caesarCipher('a',1)).toBe('b');
})

test("caesarCipher('Hello, World!', 3) should return 'Khoor, Zruog!'",()=>{
    expect(caesarCipher('Hello, World!',3)).toBe('Khoor, Zruog!');
})

test("caesarCipher('b',-3) should return 'y'",()=>{
    expect(caesarCipher('b',-3)).toBe('y');
})

test("caesarCipher('Hello World',-3) should return 'Ebiil Tloia'",()=>{
    expect(caesarCipher('Hello World',-3)).toBe('Ebiil Tloia');
})

test("caesarCipher('B',-3) should return 'Y'",()=>{
    expect(caesarCipher('B',-3)).toBe('Y');
})

test("caesarCipher('hELLO wORLD',-3) should return 'eBIIL tLOIA'",()=>{
    expect(caesarCipher('hELLO wORLD',-3)).toBe('eBIIL tLOIA');
})

test("caesarCipher('The Quick Brown Fox Jumps Over The Lazy Dog',-5) should return 'Ocz Lpdxf Wmjri Ajs Ephkn Jqzm Ocz Gvut Yjb'",()=>{
    expect(caesarCipher('The Quick Brown Fox Jumps Over The Lazy Dog',-5)).toBe('Ocz Lpdxf Wmjri Ajs Ephkn Jqzm Ocz Gvut Yjb');
})

test("caesarCipher('tHE qUICK bROWN fOX jUMPS oVER tHE lAZY dOG',-5) should return 'oCZ lPDXF wMJRI aJS ePHKN jQZM oCZ gVUT yJB'",()=>{
    expect(caesarCipher('tHE qUICK bROWN fOX jUMPS oVER tHE lAZY dOG',-5)).toBe('oCZ lPDXF wMJRI aJS ePHKN jQZM oCZ gVUT yJB');
})

test("caesarCipher('The Quick Brown Fox Jumps Over The Lazy Dog',10) should return 'Dro Aesmu Lbygx Pyh Tewzc Yfob Dro Vkji Nyq'",()=>{
    expect(caesarCipher('The Quick Brown Fox Jumps Over The Lazy Dog',10)).toBe('Dro Aesmu Lbygx Pyh Tewzc Yfob Dro Vkji Nyq');
})

test("caesarCipher('tHE qUICK bROWN fOX jUMPS oVER tHE lAZY dOG',15) should return 'iWT fJXRZ qGDLC uDM yJBEH dKTG iWT aPON sDV'",()=>{
    expect(caesarCipher('tHE qUICK bROWN fOX jUMPS oVER tHE lAZY dOG',15)).toBe('iWT fJXRZ qGDLC uDM yJBEH dKTG iWT aPON sDV');
})
