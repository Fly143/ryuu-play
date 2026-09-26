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

export class RocketSRaikouEx_108 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
    public height?: number = 1.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Lightning Burst", powerType: PowerType.ABILITY, text: "Whenever you attach a Darkness Energy card from your hand to Rocket's Raikou ex, you may choose 1 of the Defending Pokémon and switch it with 1 of your opponent's Benched Pokémon. Your opponent chooses the Benched Pokémon to switch. This power can't be used if Rocket's Raikou ex is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Thunderous Blow", cost: [], damage: "40+", text: "Does 40 damage plus 10 more damage for each Lightning Energy attached to Rocket's Raikou ex." }
  ];
  public set: string = "DX";
  public name: string = "Rocket's Raikou ex";
  public fullName: string = "Rocket's Raikou ex DX 108";
  public text: string = "Rocket's Raikou ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
