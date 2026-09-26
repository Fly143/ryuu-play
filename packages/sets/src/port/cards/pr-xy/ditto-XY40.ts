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

export class DittoXY40 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Metamorphosis Gene", powerType: PowerType.ABILITY, text: "If this Pokémon is your Active Pokémon, it can use the attacks of your opponent's Active Pokémon. (You still need the necessary Energy to use each attack.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Stick On", cost: [], damage: "10", text: "Attach a basic Energy card from your discard pile to this Pokémon." }
  ];
  public set: string = "PR-XY";
  public name: string = "Ditto";
  public fullName: string = "Ditto PR-XY XY40";
  public text: string = "Ditto";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.attachBasicFromDiscard(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
