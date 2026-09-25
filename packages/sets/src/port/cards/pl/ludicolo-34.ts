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

export class Ludicolo_34 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lombre";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Cheerful Voice", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may use this power. If you do, your turn ends. During your next turn, each of Ludicolo's attacks does 60 more damage to the Defending Pokémon (before applying Weakness and Resistance). This power can't be used if Ludicolo is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mad Dance", cost: [], damage: "20", text: "The Defending Pokémon is now Confused." },
      { name: "Best Dance", cost: [], damage: "60", text: "After doing damage, remove from Ludicolo the number of damage counters equal to the damage you did to the Defending Pokémon. Ludicolo can't use Best Dance during your next turn." }
  ];
  public set: string = "PL";
  public name: string = "Ludicolo";
  public fullName: string = "Ludicolo PL 34";
  public text: string = "Ludicolo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAfterAttack(this, store, state, effect).use(effect, 0);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
