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

export class SylveonEXRC21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dress Up", cost: [], damage: "30+", text: "If this Pokémon has a Pokémon Tool card attached to it, this attack does 30 more damage." },
      { name: "Precious Ribbon", cost: [], damage: "100", text: "Move a Fairy Energy from this Pokémon to 1 of your Benched Pokémon. If you do, heal 50 damage from that Pokémon." }
  ];
  public set: string = "GEN";
  public name: string = "Sylveon-EX";
  public fullName: string = "Sylveon-EX GEN RC21";
  public text: string = "Sylveon-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.energyTrans(this, store, state, effect).use(effect);
    }
    return state;
  }
}
