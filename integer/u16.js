function to_u16(low, high) {
    return ((high << 8) | low) & 0xffff;
}

// 65534
console.log(to_u16(0xfe, 0xff));
