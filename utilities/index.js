class Utilities {
    static Random (low, high) {
        return (Math.random() * (high - low + 1))|0 + low;
    }
}

export default Utilities;
