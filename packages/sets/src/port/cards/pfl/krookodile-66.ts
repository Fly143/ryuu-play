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

export class Krookodile_662 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Krokorok";
  public hp: number = 170;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Vengeful Fang", cost: [], damage: "60+", text: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 160 more damage." },
      { name: "Hammer In", cost: [], damage: "160", text: "" }
  ];
  public set: string = "PFL";
  public name: string = "Krookodile";
  public fullName: string = "Krookodile PFL 66";
  public text: string = "Krookodile";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 160, 1);
    }
    return state;
  }
}
