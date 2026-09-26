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

export class HisuianArcanine_100 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Hisuian Growlithe";
  public hp: number = 130;
    public height?: number = 1.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Proud Fangs", cost: [], damage: "30+", text: "If your Benched Pokémon have any damage counters on them, this attack does 90 more damage." },
      { name: "Searing Flame", cost: [], damage: "90", text: "Your opponent's Active Pokémon is now Burned." }
  ];
  public set: string = "TWM";
  public name: string = "Hisuian Arcanine";
  public fullName: string = "Hisuian Arcanine TWM 100";
  public text: string = "Hisuian Arcanine";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 90, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    return state;
  }
}
