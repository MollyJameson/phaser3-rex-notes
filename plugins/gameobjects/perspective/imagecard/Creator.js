import ImageCard from './ImageCard.js';

const BuildGameObject = Phaser.GameObjects.BuildGameObject;

export default function (config, addToScene) {
    if (config === undefined) { config = {}; }
    if (addToScene !== undefined) {
        config.add = addToScene;
    }
    var gameObject = new ImageCard(this.scene, 0, 0, config);
    BuildGameObject(this.scene, gameObject, config);

    return gameObject;
}