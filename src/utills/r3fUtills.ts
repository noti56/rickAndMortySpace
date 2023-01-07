import { Vector3 } from "@react-three/fiber";
module r3fUtills {
  export const vec3ToThree = (vec3: any): any => {
    console.log(vec3[0]);

    const stringifiedVec3 = vec3.toString();
    const arrayedVec3 = stringifiedVec3.split(",").map((string: any) => Number(string));
    return arrayedVec3;
  };
}

export default r3fUtills;
