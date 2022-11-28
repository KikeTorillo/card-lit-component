# Card-lit-component

This is a card component made with lit

![](https://github.com/KikeTorillo/imagenes/blob/main/card.png?raw=true)

![](https://github.com/KikeTorillo/imagenes/blob/main/card2.png?raw=true)

## How to install

npm install --save git+https://github.com/KikeTorillo/card-lit-component.git

## How to import

it is necesary to import the class which is saves in node modules folder

import { CardLit } from "card-lit-component/src/card-lit.js";

this web component use a Relative length unit REM so it is necesary to reset de html font size with 62.5%

## How to set the attributes and color in the component  

- --card-color: this is the variable that allow to changue the color of the card
- img: with this attribute you can set the image of the card
- title: with this attribute you can set the title of the card
- subtitle: with this attribute you set the subtitle of the card

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        html{
            font-size: 62.5%;
        }
        card-lit{
            --card-color: blue;
        }
    </style>
</head>

<body>
    <card-lit img="https://rickandmortyapi.com/api/character/avatar/361.jpeg" title="Rick sanchez" subtitle="status: alive" ></card-lit>
    <script src="./src/card-lit.js" type="module"></script>
</body>
</html>
```
###End
