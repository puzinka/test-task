const filter = (requiredRange, course) => {
    let lowerLimit = requiredRange[0];
    let upperLimit = requiredRange[1];

    let minPrice = course.prices[0];
    let maxPrice = course.prices[1];

    if (lowerLimit == null) {
        if (upperLimit == null) {
            return true;
        } else {
            if ((minPrice != null) && (maxPrice != null)) {
                if (minPrice <= upperLimit) {
                    return true;
                } else {
                    return false;
                }
            } else {
                if (minPrice == null) {
                    return true;
                } else {
                    if (minPrice <= upperLimit) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        }
    } else {
        if (upperLimit == null) {
            if (maxPrice == null) {
                return true;
            } else {
                if (maxPrice >= lowerLimit) {
                    return true;
                } else {
                    return false;
                }
            }
        } else {
            if ((minPrice != null) && (maxPrice != null)) {
                if (minPrice <= upperLimit) {
                    if (maxPrice >= lowerLimit) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            } else {
                if (minPrice == null) {
                    if (maxPrice == null) {
                        return true;
                    } else {
                        if (maxPrice >= lowerLimit) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                } else {
                    if (minPrice <= upperLimit) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        }
    }
}