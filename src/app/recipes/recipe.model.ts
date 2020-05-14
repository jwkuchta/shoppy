// a Typescript class is all we need to create a model, there is no @Model decorator

// export class Recipe {
//     public name: string
//     public description: string
//     public imagePath: string
    
//     constructor(name: string, description: string, imagePath: string) {
//         this.name = name
//         this.description = description
//         this.imagePath = imagePath
//     }

// }

import { Ingredient } from '../shared/ingredient.model'

export class Recipe {
    constructor(
        public name: string, 
        public description: string, 
        public imagePath: string, 
        public ingredients: Ingredient[]
    ) 
    {}
}