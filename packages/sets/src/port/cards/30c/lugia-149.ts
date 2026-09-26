import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class Lugia_1492 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 5.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Crystal Type", powerType: PowerType.ABILITY, text: "Whenever you attach a Fire, Water, or Psychic basic Energy card from your hand to Lugia, Lugia's type (color) becomes the same as that Energy card type until the end of the turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psychic", cost: [], damage: "10×", text: "This attack does 10 damage times the number of Energy cards attached to the Defending Pokémon." },
      { name: "Steam Blast", cost: [], damage: "50", text: "Discard an Energy card attached to Lugia." }
  ];
  public set: string = "30C";
  public name: string = "Lugia";
  public fullName: string = "Lugia 30C 149";
  public text: string = "Lugia";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "bonusPerEnergyDefending:10");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
