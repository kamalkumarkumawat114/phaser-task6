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
    // Load images
    this.load.image('image1', 'assets/image2.png'); // Replace with actual path
    this.load.image('image2', 'assets/robot.png'); // Replace with actual path
}

function create() {
    // Add the first image to the scene
    const image1 = this.add.image(100, 300, 'image1');
    
    // Create a tween to move and rotate the image
    this.tweens.add({
        targets: image1,
        x: 700, // Move to this x position
        y: 300, // Move to this y position
        angle: 360, // Rotate 360 degrees
        duration: 2000, // Duration of the tween in milliseconds
        ease: 'Power2',
        onComplete: () => {
            // Destroy the first image after the tween
            image1.destroy();
            
            // Add the second image at the same position where the first image was destroyed
            const image2 = this.add.image(700, 300, 'image2');
        }
    });
}
