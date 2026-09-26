import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class Wailord_142 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Wailmer";
  public hp: number = 120;
    public height?: number = 14.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Reactive Lift", powerType: PowerType.ABILITY, text: "As long as Wailord has any React Energy cards attached to it, the Retreat Cost for each of your Water Pokémon (excluding Pokémon-ex) is 0.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hypno Splash", cost: [], damage: "40", text: "The Defending Pokémon is now Asleep." },
      { name: "Rely on Friends", cost: [], damage: "40+", text: "Does 40 damage plus 10 more damage for each of your Benched Stage 1 Evolved Pokémon." }
  ];
  public set: string = "LM";
  public name: string = "Wailord";
  public fullName: string = "Wailord LM 14";
  public text: string = "Wailord";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, 0);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
