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

export class BoltundVSWSH085 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 200;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Electrify", cost: [], damage: "", text: "Search your deck for up to 2 Lightning Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck." },
      { name: "Bolt Storm", cost: [], damage: "10+", text: "This attack does 30 more damage for each Lightning Energy attached to all of your Pokémon." }
  ];
  public set: string = "PR-SW";
  public name: string = "Boltund V";
  public fullName: string = "Boltund V PR-SW SWSH085";
  public text: string = "Boltund V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 0);
    }
    return state;
  }
}
