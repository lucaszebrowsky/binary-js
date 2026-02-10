function to_u32(b0, b1, b2, b3) {
    return ((b3 << 24) | (b2 << 16) | (b1 << 8) | b0) >>> 0;
}

console.log(to_u32(0xfe, 0xff, 0xff, 0xff));
