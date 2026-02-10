function to_i16(low, high) {
    const bits = (high << 8) | low;

    return (bits << 16) >> 16;
}

// -2
console.log(to_i16(0xfe, 0xff));
