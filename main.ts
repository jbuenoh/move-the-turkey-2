controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bigTurkey.vy = -300
})
let bigTurkey: Sprite = null
bigTurkey = sprites.create(assets.image`player`, SpriteKind.Player)
controller.moveSprite(bigTurkey, 100, 0)
bigTurkey.ay = 500
scene.cameraFollowSprite(bigTurkey)
tiles.placeOnRandomTile(bigTurkey, assets.tile`start`)
