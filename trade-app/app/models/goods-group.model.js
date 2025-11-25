module.exports = (sequence, Sequence) => {
    const GoodsGroup = sequence.define("goodsgroup", {
        name: {
            type: Sequence.STRING
        },
        description: {
            type: Sequence.STRING
        },
        baseGoodsGroup: {
            type: Sequence.INTEGER
        }
    });

    GoodsGroup.belongsTo(GoodsGroup, { foreignKey: 'baseGoodsGroup' });

    return GoodsGroup;
};