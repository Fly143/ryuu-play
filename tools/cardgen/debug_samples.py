import sys
sys.path.insert(0, "tools/cardgen")
from generate import match_trainer, strip_rule_prefix, norm_text

samples = [
    "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Draw 3 cards. Discard a Stadium in play.",
    "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Draw cards until you have 1 more card in your hand than your opponent.",
    "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Choose 1: • Put a Pokémon from your discard pile into your hand. • Shuffle 3 Pokémon from your discard pile into your deck.",
    "Draw 3 cards. Discard a Stadium in play.",
    "Draw cards until you have 1 more card in your hand than your opponent.",
    "Choose 1: Put a Pokémon from your discard pile into your hand. Shuffle 3 Pokémon from your discard pile into your deck.",
    "Put up to 3 in any combination of Pokémon that don't have a Rule Box and Basic Energy cards from your discard pile into your hand.",
    "Draw 2 cards. If your Active Pokémon has \"Hisuian\" in its name, draw 2 more cards.",
    "Choose a card in your hand, and discard the other cards. If you do, draw 4 cards.",
    "Flip 2 coins. Put a number of cards up to the number of heads from your discard pile on top of your deck in any order.",
]
for s in samples:
    print("IN ", s[:90])
    print("ST ", strip_rule_prefix(norm_text(s).lower())[:90])
    print("M  ", match_trainer(s, [], "x"))
    print()
