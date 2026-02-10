function to_i32(b0, b1, b2, b3) {
    const bits = (b3 << 24) | (b2 << 16) | (b1 << 8) | b0;

    return bits << 0;
}

// -2
console.log(to_i32(0xfe, 0xff, 0xff, 0xff));
