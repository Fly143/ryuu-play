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

export class RayquazaCLVX_146 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rayquaza C";
  public hp: number = 120;
    public height?: number = 3.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dragon Spirit", powerType: PowerType.ABILITY, text: "If Rayquaza C is your Active Pokémon and is damaged but not Knocked Out by an opponent's attack, you may search your discard pile for an Energy card and attach it to Rayquaza C.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Final Blowup", cost: [], damage: "200", text: "Discard all Energy attached to Rayquaza C. Ignore this effect if you have no cards in your hand." }
  ];
  public set: string = "SV";
  public name: string = "Rayquaza C LV.X";
  public fullName: string = "Rayquaza C LV.X SV 146";
  public text: string = "Rayquaza C LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 99);
    }
    return state;
  }
}
