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

export class AlolanExeggutor_95 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Exeggcute";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Exeggutor's Paradise", cost: [], damage: "", text: "For each of your Benched Exeggcute, search your deck for an Alolan Exeggutor or Alolan Exeggutor-GX and put it onto that Exeggcute to evolve it. Then, shuffle your deck." },
      { name: "Draco Meteor Barrage", cost: [], damage: "80×", text: "Flip a coin for each Grass Energy attached to this Pokémon. This attack does 80 damage for each heads." }
  ];
  public set: string = "UPR";
  public name: string = "Alolan Exeggutor";
  public fullName: string = "Alolan Exeggutor UPR 95";
  public text: string = "Alolan Exeggutor";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 1, 80);
    }
    return state;
  }
}
