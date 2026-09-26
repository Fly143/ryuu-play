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

export class GreatTuskEx_72 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 250;
    public height?: number = 2.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Quaking Demolition", powerType: PowerType.ABILITY, text: "Once at the end of your turn (after your attack), if this Pokémon is in the Active Spot, you must discard the top 5 cards of your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Great Bash", cost: [], damage: "260", text: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon." }
  ];
  public set: string = "PR-SV";
  public name: string = "Great Tusk ex";
  public fullName: string = "Great Tusk ex PR-SV 72";
  public text: string = "Great Tusk ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    return state;
  }
}
