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

export class UnownT_67 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "THROW", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Unown T is your Active Pokémon, you may discard a card from your hand. Then, flip a coin. If heads, put 2 damage counters on 1 of your opponent's Benched Pokémon. This power can't be used if Unown T is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hidden Power", cost: [], damage: "", text: "Look at your opponent's hand and choose 1 card, then have your opponent shuffle that card into his or her deck. Then, show your opponent your hand and he or she chooses 1 card. Shuffle that card into your deck." }
  ];
  public set: string = "MT";
  public name: string = "Unown [T]";
  public fullName: string = "Unown [T] MT 67";
  public text: string = "Unown [T]";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.peekOpponentHand(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "discardFromHand:1");
    }
    return state;
  }
}
