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

export class Wailord_322 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Wailmer";
  public hp: number = 200;
    public height?: number = 14.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Water Veil", powerType: PowerType.ABILITY, text: "Whenever you attach an Energy card from your hand to this Pokémon, remove all Special Conditions from it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hydro Pump", cost: [], damage: "10+", text: "This attack does 40 more damage for each Water Energy attached to this Pokémon." }
  ];
  public set: string = "VIV";
  public name: string = "Wailord";
  public fullName: string = "Wailord VIV 32";
  public text: string = "Wailord";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
