/* check  triangle
TriangleType(1,2,3): Scalene
TriangleType(2,2,2):  Equilateral
TriangleType(2,2,3):  Isoceles
*/ 

const triangleType = (side1, side2, side3) => {
    var triangleType;
      ((side1 === side2) && (side1 === side3)) ? (
        triangleType = 'Equilateral'
      ) : '';
      if(triangleType){
      return triangleType;
      }
      ((side1 === side2) || (side1 === side3) || (side2 === side3)) ? (triangleType = 'Isoceles') : (triangleType = 'Scalene');
        return triangleType;
    };
    
    console.log(triangleType(1,2,3));
    console.log(triangleType(2,2,3));
    console.log(triangleType(2,2,2));
    