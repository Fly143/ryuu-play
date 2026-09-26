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

export class Vaporeon_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 70;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Delta Search", cost: [], damage: "10", text: "Search your deck for a Holon Energy card and attach it to Vaporeon. Shuffle your deck afterward." },
      { name: "Return Wave", cost: [], damage: "50", text: "You may return an Energy card attached to Vaporeon to your hand. If you do, choose an Energy card attached to the Defending Pokémon and return it to your opponent's hand." }
  ];
  public set: string = "DS";
  public name: string = "Vaporeon δ";
  public fullName: string = "Vaporeon δ DS 18";
  public text: string = "Vaporeon δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.scoopUpSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
