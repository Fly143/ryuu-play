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

export class DragoniteEX_74 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
    public height?: number = 2.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Bust In", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand onto your Bench, you may move any number of basic Energy attached to your Pokémon to this Pokémon. If you do, switch this Pokémon with your Active Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Jet Sonic", cost: [], damage: "80+", text: "You may discard an Energy attached to this Pokémon. If you do, this attack does 40 more damage." }
  ];
  public set: string = "FFI";
  public name: string = "Dragonite-EX";
  public fullName: string = "Dragonite-EX FFI 74";
  public text: string = "Dragonite-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
