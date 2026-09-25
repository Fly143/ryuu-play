import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ZoroarkGX_53 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Zorua";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Trade", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may discard a card from your hand. If you do, draw 2 cards.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Riotous Beating", cost: [], damage: "20×", text: "This attack does 20 damage for each of your Pokémon in play." },
      { name: "Trickster-GX", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon's attacks and use it as this attack. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "SLG";
  public name: string = "Zoroark-GX";
  public fullName: string = "Zoroark-GX SLG 53";
  public text: string = "Zoroark-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 2);
    }
    return state;
  }
}
