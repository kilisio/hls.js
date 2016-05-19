/**
 *  AAC helper
 */

class AAC {
    static getSilentFrame(channelCount) {
        if (channelCount === 1) {
            return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x23, 0x80]);
        } else if (channelCount === 2) {
            return new Uint8Array([
                0x21,
                0x00,
                0x49,
                0x90,
                0x02,
                0x19,
                0x00,
                0x23,
                0x80
            ]);
        } else if (channelCount === 3) {
            return new Uint8Array([
                0x00,
                0xc8,
                0x00,
                0x80,
                0x20,
                0x84,
                0x01,
                0x26,
                0x40,
                0x08,
                0x64,
                0x00,
                0x8e
            ]);
        } else if (channelCount === 4) {
            return new Uint8Array([
                0x00,
                0xc8,
                0x00,
                0x80,
                0x20,
                0x84,
                0x01,
                0x26,
                0x40,
                0x08,
                0x64,
                0x00,
                0x80,
                0x2c,
                0x80,
                0x08,
                0x02,
                0x38
            ]);
        } else if (channelCount === 5) {
            return new Uint8Array([
                0x00,
                0xc8,
                0x00,
                0x80,
                0x20,
                0x84,
                0x01,
                0x26,
                0x40,
                0x08,
                0x64,
                0x00,
                0x82,
                0x30,
                0x04,
                0x99,
                0x00,
                0x21,
                0x90,
                0x02,
                0x38
            ]);
        } else if (channelCount === 6) {
            return new Uint8Array([
                0x00,
                0xc8,
                0x00,
                0x80,
                0x20,
                0x84,
                0x01,
                0x26,
                0x40,
                0x08,
                0x64,
                0x00,
                0x82,
                0x30,
                0x04,
                0x99,
                0x00,
                0x21,
                0x90,
                0x02,
                0x00,
                0xb2,
                0x00,
                0x20,
                0x08,
                0xe0
            ]);
        }
        return null;
    }
}

export default AAC;
