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

export class Sawsbuck_162 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Deerling";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Seasonal Blessings", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may draw a card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Bounce", cost: [], damage: "60", text: "You may switch this Pokémon with 1 of your Benched Pokémon." }
  ];
  public set: string = "CEC";
  public name: string = "Sawsbuck";
  public fullName: string = "Sawsbuck CEC 16";
  public text: string = "Sawsbuck";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 1);
    }
    return state;
  }
}
