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

export class SalamenceSM140 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shelgon";
  public hp: number = 150;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dragon Wind", powerType: PowerType.ABILITY, text: "If this Pokémon is your Active Pokémon, once during your turn (before your attack), you may switch 1 of your opponent's Benched Pokémon with their Active Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dragon Claw", cost: [], damage: "100", text: "" }
  ];
  public set: string = "PR-SM";
  public name: string = "Salamence";
  public fullName: string = "Salamence PR-SM SM140";
  public text: string = "Salamence";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.switchSelfPower(this, store, state, effect).reduce(effect.power);
    }
    return state;
  }
}
