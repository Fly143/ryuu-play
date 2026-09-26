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
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DusclopsEx_94 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Duskull";
  public hp: number = 100;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dark Hole", powerType: PowerType.ABILITY, text: "As long as Dusclops ex is on your Bench, don't apply Darkness Weakness for all of your Pokémon is play.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Shadow Beam", cost: [], damage: "", text: "Put 2 damage counters on the Defending Pokémon for each Energy attached to Dusclops ex." }
  ];
  public set: string = "EM";
  public name: string = "Dusclops ex";
  public fullName: string = "Dusclops ex EM 94";
  public text: string = "Dusclops ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
