// Phaser configuration
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#5451f1',
    scene: {
        preload: preload,
        create: create,
    }
};

const game = new Phaser.Game(config);

function preload() {
    
    this.load.image('image1', 'assets/image2.png'); 
    this.load.image('image2', 'assets/robot.png'); 
}

function create() {
    
    const image1 = this.add.image(50, 300, 'image1');
    
    
    this.tweens.add({
        targets: image1,
        x: 700, 
        y: 300, 
        angle: 360, 
        duration: 3000, 
        ease: 'Power1',
        onComplete:()=>{
            this.tweens.add({
            targets: image1,
            x: 50,
            y: 300,
            angle: 360, 
            duration: 3000,
            ease: 'Power1',
            onComplete:()=>{
                this.tweens.add({
                    targets: image1,
                    x: 700, 
                    y: 300, 
                    angle: 360, 
                    duration: 3000, 
                    ease: 'Power1',
                

        onComplete: () => {
          
            image1.destroy();
            
            const image2 = this.add.image(700, 300, 'image2');
        }
     });
  }})
 }}
)}
