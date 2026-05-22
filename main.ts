sprites.onOverlap(SpriteKind.Player, SpriteKind.Egg, function (sprite, otherSprite) {
    otherSprite.follow(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Quail, function (sprite, otherSprite) {
    otherSprite.follow(mySprite)
})
scene.onOverlapTile(SpriteKind.Egg, assets.tile`coop`, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Quail, assets.tile`coop`, function (sprite, location) {
    sprite.destroy()
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . 8 8 . 8 6 . 8 6 . . . 
    . . . . 8 6 6 8 6 7 8 6 7 6 . . 
    . . . . 8 7 7 8 6 6 8 6 7 6 . . 
    . . . . 8 6 6 8 6 6 8 6 6 8 f . 
    . . . . 8 7 7 f 7 7 f 7 7 f 7 6 
    . . . . f 7 7 f 7 7 f 7 7 f 7 6 
    . . 8 8 f 6 6 f 6 6 f 6 6 f 7 6 
    . 8 6 6 f 6 6 6 6 6 6 6 6 6 6 8 
    . 8 6 6 f 6 6 6 6 6 6 6 6 6 6 8 
    . f 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
    . f 6 6 6 6 6 6 6 6 6 6 6 6 7 f 
    . . f 7 7 7 7 7 7 7 7 7 7 7 7 f 
    . . . f 7 7 7 7 7 7 7 7 7 7 f . 
    . . . f 8 7 7 7 7 7 7 7 7 6 f . 
    . . . . f 8 6 6 6 6 6 6 6 6 8 . 
    . . . . . f f f f 8 8 8 8 8 . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
