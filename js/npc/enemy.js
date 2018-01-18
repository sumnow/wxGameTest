import Animation from '../base/animation'
import DataBus   from '../databus'
import Sprite from '../base/sprite'


const ENEMY_IMG_SRC = 'images/monster.png'
const ENEMY_WIDTH   = 60
const ENEMY_HEIGHT  = 60
const screenWidth  = window.innerWidth
const screenHeight = window.innerHeight



const __ = {
  speed: Symbol('speed')
}

let databus = new DataBus()

function rnd(start, end){
  return Math.floor(Math.random() * (end - start) + start)
}

export default class Enemy extends Sprite {
  constructor(ctx) {
    super(ENEMY_IMG_SRC, ENEMY_WIDTH, ENEMY_HEIGHT)

    this.x = screenWidth / 2 - this.width / 2
    this.y = screenHeight - this.height - 30

    this.render(ctx)

    this.left = 0
    // this.initExplosionAnimation()
  }

  update() {
    this.left += 2

    if (this.left >= screenWidth )
      this.left = 0
  }



  render(ctx) {
    ctx.drawImage(
      this.img,
      0,
      0,
      ENEMY_WIDTH,
      ENEMY_HEIGHT,
      this.left,
      screenHeight-this.height-30,
      100,
      100
    )
  }


  // init(speed) {
  //   this.x = rnd(0, window.innerWidth - ENEMY_WIDTH)
  //   this.y = -this.height

  //   this[__.speed] = speed

  //   this.visible = true
  // }

  // 预定义爆炸的帧动画
  // initExplosionAnimation() {
  //   let frames = []

  //   const EXPLO_IMG_PREFIX  = 'images/explosion'
  //   const EXPLO_FRAME_COUNT = 19

  //   for ( let i = 0;i < EXPLO_FRAME_COUNT;i++ ) {
  //     frames.push(EXPLO_IMG_PREFIX + (i + 1) + '.png')
  //   }

  //   this.initFrames(frames)
  // }

  // 每一帧更新子弹位置
  // update() {
  //   this.y += this[__.speed]

  //   // 对象回收
  //   if ( this.y > window.innerHeight + this.height )
  //     databus.removeEnemey(this)
  // }
}
