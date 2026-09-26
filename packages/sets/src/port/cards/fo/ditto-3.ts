import {
  Effect,
  State,
  StoreLike,
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

export class Ditto_3 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Transform", powerType: PowerType.ABILITY, text: "If Ditto is your Active Pokémon, treat it as if it were the same card as the Defending Pokémon, including type, Hit Points, Weakness, and so on, except Ditto can't evolve, always has this Pokémon Power, and you may treat any Energy attached to Ditto as Energy of any type. Ditto isn't a copy of any other Pokémon while Ditto is Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [];
  public set: string = "FO";
  public name: string = "Ditto";
  public fullName: string = "Ditto FO 3";
  public text: string = "Ditto";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "dittoTransform");
    }
    return state;
  }
}
