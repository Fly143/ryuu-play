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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HeatRotomRT3 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Heat Shift", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may use this power. Heat Rotom's type is Fire until the end of your turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Warm Up", cost: [], damage: "", text: "Search your deck for a Fire Energy card and attach it to 1 of your Benched Pokémon. Shuffle your deck afterward." },
      { name: "Heat Burn", cost: [], damage: "40", text: "The Defending Pokémon is now Burned." }
  ];
  public set: string = "RR";
  public name: string = "Heat Rotom";
  public fullName: string = "Heat Rotom RR RT3";
  public text: string = "Heat Rotom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    return state;
  }
}
