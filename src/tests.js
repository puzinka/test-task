const assertEquel = (expected, actual) => {
    if (expected === actual) {
        console.log('test passed');
    } else {
        console.error(expected + ' not equels ' + actual);
    }
};

const solutionTests = () => {

    let courses = [
        { name: "Courses in England", prices: [0, 100] }, 
        { name: "Courses in Germany", prices: [500, null] }, 
        { name: "Courses in Italy", prices: [100, 200] }, 
        { name: "Courses in Russia", prices: [null, 400] },
        { name: "Courses in China", prices: [50, 250] },
        { name: "Courses in USA", prices: [200, null] },
        { name: "Courses in Kazakhstan", prices: [56, 324] },
        { name: "Courses in France", prices: [null, null] },
    ];

    let requiredRange1 = [null, 200];
    let requiredRange2 = [100, 350];
    let requiredRange3 = [200, null];

    // Первый диапазон цен
    assertEquel(true, filter(requiredRange1, courses[0]));
    assertEquel(false, filter(requiredRange1, courses[1]));
    assertEquel(true, filter(requiredRange1, courses[2]));
    assertEquel(true, filter(requiredRange1, courses[3]));
    assertEquel(true, filter(requiredRange1, courses[4]));
    assertEquel(true, filter(requiredRange1, courses[5]));
    assertEquel(true, filter(requiredRange1, courses[6]));
    assertEquel(true, filter(requiredRange1, courses[7]));

    // Второй диапазон цен
    assertEquel(true, filter(requiredRange2, courses[0]));
    assertEquel(false, filter(requiredRange2, courses[1]));
    assertEquel(true, filter(requiredRange2, courses[2]));
    assertEquel(true, filter(requiredRange2, courses[3]));
    assertEquel(true, filter(requiredRange2, courses[4]));
    assertEquel(true, filter(requiredRange2, courses[5]));
    assertEquel(true, filter(requiredRange2, courses[6]));
    assertEquel(true, filter(requiredRange2, courses[7]));

    // Третий диапазон цен
    assertEquel(false, filter(requiredRange3, courses[0]));
    assertEquel(true, filter(requiredRange3, courses[1]));
    assertEquel(true, filter(requiredRange3, courses[2]));
    assertEquel(true, filter(requiredRange3, courses[3]));
    assertEquel(true, filter(requiredRange3, courses[4]));
    assertEquel(true, filter(requiredRange3, courses[5]));
    assertEquel(true, filter(requiredRange3, courses[6]));
    assertEquel(true, filter(requiredRange3, courses[7]));
}